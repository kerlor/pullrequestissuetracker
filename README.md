# new-issue-welcome

> a GitHub App built with [probot](https://github.com/probot/probot) that welcomes new users when they open their first issue. You can use this welcome message to provide links to resources like the contributing guidelines, code of conduct, etc. It should be located in a `.github/config.yml`

<img width="801" alt="screen shot 2017-07-17 at 1 31 50 pm" src="https://user-images.githubusercontent.com/13410355/28288547-5f83aa8e-6af4-11e7-9692-eb41d42431e2.png">

## Usage

1. Install the bot on the intended repositories. The plugin requires the following **Permissions and Events**:
- Issues: **Read & Write**
  - [x] check the box for **Issue** events
2. Add a `.github/config.yml` file that contains the contents you would like to reply within an `newIssueWelcomeComment`
```yml
# Configuration for new-issue-welcome - https://github.com/behaviorbot/new-issue-welcome

# Comment to be posted to on first time issues
newIssueWelcomeComment: >
  Thanks for opening your first issue here! Be sure to follow the issue template!
```

## Setup

```
# Install dependencies
npm install

# Run the bot
npm start
```

See [the probot deployment docs](https://github.com/probot/probot/blob/master/docs/deployment.md) if you would like to run your own instance of this plugin.
