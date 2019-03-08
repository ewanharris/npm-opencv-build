"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var utils_1 = require("./utils");
var rootDir = __dirname;
var opencvRoot = path.join(rootDir, 'opencv');
var opencvSrc = path.join(opencvRoot, 'opencv');
var opencvContribSrc = path.join(opencvRoot, 'opencv_contrib');
var opencvContribModules = path.join(opencvContribSrc, 'modules');
var opencvBuild = path.join(opencvRoot, 'build');
var opencvInclude = path.join(opencvBuild, 'include');
var opencvLibDir = utils_1.isWin() ? path.join(opencvBuild, 'lib/Release') : path.join(opencvBuild, 'lib');
var opencvBinDir = utils_1.isWin() ? path.join(opencvBuild, 'bin/Release') : path.join(opencvBuild, 'bin');
exports.dirs = {
    rootDir: rootDir,
    opencvRoot: opencvRoot,
    opencvSrc: opencvSrc,
    opencvContribSrc: opencvContribSrc,
    opencvContribModules: opencvContribModules,
    opencvBuild: opencvBuild,
    opencvInclude: opencvInclude,
    opencvLibDir: opencvLibDir,
    opencvBinDir: opencvBinDir
};
