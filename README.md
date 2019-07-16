# keybase-bot-serverless

A sample Serverless template for Keybase bot deployment.

## Dependencies

This project's `Makefile` acquires a Keybase binary from
the official Docker images, therefore [a working Docker](https://docs.docker.com/install/)
installation is required.

We built it using Node v10 and Serverless v1.47, although
it's likely that it will run on any modern version of
Serverless.

## Configuration

In order to start the template you nee to set the following
environment variables in `serverless.yml`:

- `KB_USERNAME`, which is the username of your bot,
- `KB_PAPERKEY`, which is its paper key and
- `KB_TARGET_USER`, which is only used in the demo handler as
  the recipient of the message containing the passed event
  parameters.

## Deployment

If your Serverless installation is configured with a default
profile, simply run `make deploy` to publish this project.
Otherwise `make build` and then run `serverless deploy` with
all the required parameters (such as the AWS CLI profile).
