module.exports = robot => {
  robot.on('issues.opened', async context => {
    const response = await context.github.issues.getForRepo(context.repo({
      state: 'all',
      creator: context.payload.issue.user.login
    }))
    console.log("1")

    try {

          
          context.github.issues.createComment(context.issue({body: "test123"}))

      } catch (err) {
        if (err.code !== 404) {
          throw err
        }
      }
  })
}
