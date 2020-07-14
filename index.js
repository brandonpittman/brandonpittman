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
  name: chalk.white("              Brandon Pittman"),
  work: chalk.white("Frontend Wizard @ Quartet Communications"),
  opensource: chalk`{white.bold React | Gatsby | Next.js | Vue | Gridsome | Node.js | Tailwind} {green.bold ⬢}`,
  twitter: chalk`{gray https://twitter.com/}{cyan brandonpittman}`,
  npm: chalk`{gray https://npmjs.com/}{red ~brandonpittman}`,
  github: chalk`{gray https://github.com/}{green brandonpittman}`,
  wantedly: chalk`{gray https://www.wantedly.com/users/}{blue 80873258}`,
  web: chalk`{cyan https://blp.is}`,
  npx: chalk`{red npx} {white brandonpittman}`,
  labelWork: chalk.white.bold("       Work:"),
  labelOpenSource: chalk.white.bold("Open Source:"),
  labelTwitter: chalk.white.bold("    Twitter:"),
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
const twittering = `${data.labelTwitter}  ${data.twitter}`;
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
  newline +
  twittering +
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
