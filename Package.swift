// swift-tools-version: 6.1
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
  name: "vouch-ios-sdk",
  products: [
    .library(
      name: "vouch-ios-sdk",
      targets: ["vouch-ios-sdk"])
  ],
  targets: [
    .target(
      name: "vouch-ios-sdk")
  ]
)
