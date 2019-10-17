# Overview

In this workshop, we will use [Continuous Integration (CI)](https://en.wikipedia.org/wiki/Continuous_integration) to run specific tasks on our code and deploy our artefacts in the [Cloud](https://azure.microsoft.com/en-us/overview/what-is-the-cloud/). Specifically, we will use the following open-source or free tools:

* [Git](https://git-scm.com): a popular [Source Code Management (SCM)](https://git-scm.com) tool. Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.
* [GitHub](https://github.com): a hosting service for Git repositories. So they are not the same thing: Git is the tool, GitHub is the service for projects that use Git.
* [CircleCI](https://circleci.com): a free cloud-based continous integration platform that is integrated with GitHub.
* [Heroku](https://www.heroku.com): a cloud platform as a service (PaaS) that lets developers build, deliver, monitor, and scale apps. Heroku bypasses infrastructure headaches.

# Setup Instructions

In this section, we will outline the steps you should follow to get all the necessary software ready for the workshop.

## Prerequisites

You must have Git installed on your laptop computer. You can find the Git installation packages for your platform here: https://git-scm.com/downloads.

## Create a GitHub Account and Fork the Workshop Repository

Sign up for **free** GitHub account at https://github.com/join and verify your email by entering the verification code sent you by email.

Once your account is set up, log into your account and navigate to the workshop's repository at: https://github.com/walmartdigital/foundation-exercise-1.

Click the **Fork** button as shown in the image below:

![Fork a repository](/doc/images/fork.png)

## Create a CircleCI Account and Connect it to your GitHub Account

Sign up for a CircleCI account using your GitHub account at https://circleci.com/signup/ as shown below:

![Sign up for a CircleCI account](/doc/images/circleci.png)

Authorize CircleCI to access your repositories:

![Authorize CircleCI](/doc/images/authorize.png)

## Create a Heroku Account and a New Application

Create a new Heroku account at: https://signup.heroku.com/.

Once the account is created, log into your new account at: https://id.heroku.com/login.

Create a new App and give it a unique name such as *wmt-workshop-juanito*.

![Create a new app](/doc/images/create-app.png)

![Name the app](/doc/images/app-name.png)

Navigate to *Account Settings* and reveal your API key:

![Go to account settings](/doc/images/account-settings.png)

![Reveal API key](/doc/images/api-key.png)

Copy your API key to the clipboard.

## Set up your Project in CircleCI

Go back to CircleCI: https://circleci.com/dashboard, click *Add Projects* on the left pane and click *Setup Project*.

![Set up the project](/doc/images/setup-project.png)

In the *Language* section of the project setup page, select *Node* and finally click *Start Building*.

![Start building](/doc/images/start-building.png)

Navigate to *Settings* in the left pane, click *Projects* and open the *foundation-exercise-1* settings.

![Click project settings](/doc/images/project-settings.png)

In the *Build Settings* section, click *Environment Variables* and click *Add Variable*.

Add the following two variables:

* HEROKU_API_KEY: value should be that of your Heroku API key
* HEROKU_APP_NAME: value should be that of your Heroku App name, e.g., *wmt-workshop-juanito*

![Set env var 1](/doc/images/env-var-1.png)

![Set env var 2](/doc/images/env-var-2.png)

## You should be all set! Happy coding!












