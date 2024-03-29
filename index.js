#!/usr/bin/env node

"use strict";

const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

const options = {
  padding: 2,
  margin: 2,
  borderStyle: "round",
};

const data = {
  name: chalk.white.bold("              Brandon Pittman"),
  work: chalk.white("Frontend Magician @ Splink"),
  opensource: chalk`{white React | Remix | Qwik | Vanilla Extract}`,
  npm: chalk`{red https://npmjs.com/~brandonpittman}`,
  github: chalk`{green https://github.com/brandonpittman}`,
  wantedly: chalk`{blue https://www.wantedly.com/users/80873258}`,
  web: chalk`{cyan https://brandonpittman.com}`,
  npx: chalk`{red npx} {white brandonpittman}`,
  labelWork: chalk.white.bold("       Work:"),
  labelOpenSource: chalk.white.bold("Open Source:"),
  labelnpm: chalk.white.bold("        npm:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelWantedly: chalk.white.bold("   Wantedly:"),
  labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:"),
};

const newline = "\n";
const heading = `${data.name}`;
const working = `${data.labelWork}  ${data.work}`;
const opensourcing = `${data.labelOpenSource}  ${data.opensource}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const wantedlying = `${data.labelWantedly}  ${data.wantedly}`;
const webing = `${data.labelWeb}  ${data.web}`;
const carding = `${data.labelCard}  ${data.npx}`;

const output =
  heading +
  newline +
  newline +
  working +
  newline +
  opensourcing +
  newline +
  npming +
  newline +
  githubing +
  newline +
  wantedlying +
  newline +
  newline +
  webing +
  newline +
  newline +
  carding;

const boxedText = chalk.blue(boxen(output, options));
console.log(boxedText);
