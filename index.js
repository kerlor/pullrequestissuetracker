module.exports = robot => {
  robot.on('pull_request.opened', async context => {
    const params = context.issue()
    params.id=params.number
    params.body='Outstanding tasks'
    context.github.issues.createComment(params)
 })
  robot.on('pull_request_review_comment.created', async context => {
    if(context.payload.comment.user.login === "pull-request-issue-tracker[bot]") return
    
    try {
      const comments = await context.github.issues.getComments(context.issue())
      if(comments.data && comments.data.length > 1){
          if(comments.data[0].user.login === "pull-request-issue-tracker[bot]"){
            const editCommentParams = context.issue()
            editCommentParams.id = comments.data[0].id
            editCommentParams.body = comments.data[0].body
            const issueComment = context.payload.comment.body.substring(0,30);
            editCommentParams.body += '\n- [ ] ' + issueComment
            context.github.issues.editComment(editCommentParams)
          }
      }

      } catch (err) {
        if (err.code !== 404) {
          throw err
        }
      }
  })
  robot.on('issue_comment.created', async context => {
    if (!context.payload.issue.pull_request) return
    if(context.payload.comment.user.login === "pull-request-issue-tracker[bot]") return
    
    try {
      
      const comments = await context.github.issues.getComments(context.issue())
      if(comments.data && comments.data.length > 1){
          if(comments.data[0].user.login === "pull-request-issue-tracker[bot]"){
            const editCommentParams = context.issue()
            editCommentParams.id = comments.data[0].id
            editCommentParams.body = comments.data[0].body
            const issueComment = context.payload.comment.body.substring(0,30);

            editCommentParams.body += '\n- [ ] ' + issueComment
            context.github.issues.editComment(editCommentParams)
          }
      }

      } catch (err) {
        if (err.code !== 404) {
          throw err
        }
      }
  })
}
