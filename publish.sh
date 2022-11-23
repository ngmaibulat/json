#!/bin/bash

npm run build

npm run commit

npm version patch

npm publish
