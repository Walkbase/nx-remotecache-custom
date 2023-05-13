"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRemoteCacheRetrieve = void 0;
const adm_zip_1 = __importDefault(require("adm-zip"));
const fs_1 = require("fs");
const path_1 = require("path");
const COMMIT_FILE_EXTENSION = ".commit";
const COMMIT_FILE_CONTENT = "true";
const extractZipBuffer = (buffer, destination) => {
    const zip = new adm_zip_1.default(buffer);
    zip.extractAllTo(destination, true);
};
const writeCommitFile = (destination) => {
    const commitFilePath = destination + COMMIT_FILE_EXTENSION;
    fs_1.writeFileSync(commitFilePath, COMMIT_FILE_CONTENT);
};
const createRemoteCacheRetrieve = (safeImplementation) => async (hash, cacheDirectory) => {
    const implementation = await safeImplementation;
    if (!implementation) {
        return false;
    }
    const { fileExists, retrieveFile } = implementation;
    const isFileCached = await fileExists(hash);
    if (!isFileCached) {
        return false;
    }
    const buffer = await retrieveFile(hash);
    const destination = path_1.join(cacheDirectory, hash);
    if (!buffer) {
        return false;
    }
    extractZipBuffer(buffer, destination);
    writeCommitFile(destination);
    return true;
};
exports.createRemoteCacheRetrieve = createRemoteCacheRetrieve;
