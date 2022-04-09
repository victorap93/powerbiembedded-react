# Power BI Embedded React APP

[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE)
[![Latest Version](https://img.shields.io/github/release/victorap93/powerbiembedded-react-app.svg?style=flat-square)](https://github.com/victorap93/powerbiembedded-react-app/releases)


## Dependency

For the full working of this project, you also need to start its [API](https://github.com/victorap93/powerbiembedded-php-api) in PHP.


## Installation

Make sure you have the **Node.js** service running and **npm** installed, open the terminal, navigate to your working directory and run the commands below:

```bash
git clone https://github.com/victorap93/powerbiembedded-react.git
cd .\powerbiembedded-react\
npm install
```


## How to use

### Get the nedded parameters:

Read this [step](https://docs.microsoft.com/en-us/power-bi/developer/embedded/embed-sample-for-customers?tabs=net-core#step-5---get-the-embedding-parameter-values) to know how to get neded params.

### Put paramters in project:

Create a copy from `.env.example` named `.env` and replace the empty values ​​with *report_id* obtained from Microsoft and your API URL.

### Run app:

Open a terminal and run the commands below:

```bash
npm start
```


## License

Power BI Embedded React APP is made available under the MIT License (MIT). Please see [License File](LICENSE) for more information.