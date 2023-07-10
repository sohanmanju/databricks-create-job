import * as core from '@actions/core';
import fetch from 'node-fetch';
import fs from 'fs';

const dir = core.getInput('input-folder');
const template_file = core.getInput('template-file');
const input_file = core.getInput('input-file');
const databricks_token = core.getInput('databricks-token');
const databricks_host = core.getInput('databricks-host');

async function createJob() {
  try {
    const templateData = fs.readFileSync(`/${dir}/${template_file}.json`);
    const inputData = fs.readFileSync(`/${dir}/${input_file}.json`);

    const input = JSON.parse(inputData);
    let template = JSON.parse(templateData);

    for (let key in template) {
      if (input.hasOwnProperty(key)) {
        template[key] = input[key];
      }
    }

    const response = await fetch(`${databricks_host}/api/2.0/jobs/create`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${databricks_token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(template)
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Job created successfully:", data);
      core.setOutput('response', JSON.stringify(data));
    } else {
      core.setFailed("Failed to create job:", response.status);
    }
  } catch (error) {
    core.setFailed("Error occurred while creating job:", error);
  }
}

createJob();
