# Databricks Job Creation GitHub Action

This GitHub Action automates the process of creating jobs in Databricks. By using this action, you can streamline your workflow and easily create Databricks jobs with the provided input data and template.

## Features

- Reads input folder, template file, input file, Databricks token, and Databricks host as input parameters.
- Merges the data from the input file into the template.
- Makes an API call to Databricks to create the job.
- Logs the created job data if the job creation is successful.
- Logs the HTTP status code if the job creation fails.

## Usage

To use this GitHub Action in your workflow, follow these steps:

1. Add the following code snippet to your workflow file (e.g., `.github/workflows/create-job.yml`):

```yaml
name: Create Databricks Job
on:
  push:
    branches:
      - main

jobs:
  create-job:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Create Databricks Job
        uses: your-username/databricks-job-action@v1
        with:
          input-folder: 'path/to/input/folder'
          template-file: 'template-file-name'
          input-file: 'input-file-name'
          databricks-token: ${{ secrets.DATABRICKS_TOKEN }}
          databricks-host: 'https://your-databricks-host.com'
```

2. Replace `your-username` with your GitHub username in the `uses` field.
3. Specify the input folder, template file, input file, Databricks token, and Databricks host according to your project's requirements.
4. Make sure you have the necessary permissions and secrets set up in your repository or GitHub organization to access the required data.
5. Commit and push the changes to your repository.

## Inputs

The following inputs are supported:

- `input-folder` (required): The path to the input folder containing the template file and input file.
- `template-file` (required): The name of the template file (without the extension).
- `input-file` (required): The name of the input file (without the extension).
- `databricks-token` (required): The Databricks token for authentication.
- `databricks-host` (required): The URL of the Databricks host.

## Example

Here is an example of how to use this action in your workflow:

```yaml
name: Create Databricks Job
on:
  push:
    branches:
      - main

jobs:
  create-job:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Create Databricks Job
        uses: your-username/databricks-job-action@v1
        with:
          input-folder: 'jobs/'
          template-file: 'template'
          input-file: 'input'
          databricks-token: ${{ secrets.DATABRICKS_TOKEN }}
          databricks-host: 'https://your-databricks-host.com'
```

In this example, the template file is located at `jobs/template.json` and the input file is located at `jobs/input.json`. Make sure to adjust the file paths and provide the correct Databricks token and host.

## License

This GitHub Action is licensed under the [MIT License](LICENSE).
