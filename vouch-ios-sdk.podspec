Pod::Spec.new do |spec|
  spec.name         = "vouch-ios-sdk"
  spec.version      = "0.9.8"
  spec.summary      = "Binary iOS framework for integrating with the Vouch platform"
  spec.description  = <<-DESC
                      The Vouch iOS SDK provides a binary framework for integrating
                      with the Vouch platform. It enables proof generation and verification
                      capabilities in your iOS applications.
                      DESC

  spec.homepage     = "https://github.com/vlayer-xyz/vouch-ios-sdk"
  spec.license      = { :type => "MIT", :file => "LICENSE" }
  spec.author       = { "Vouch" => "https://getvouch.io" }

  spec.platform     = :ios, "14.0"
  spec.swift_version = "6.1"

  spec.source       = {
    :http => "https://github.com/vlayer-xyz/vouch-ios-sdk/releases/download/v0.9.8/VouchSDK.xcframework.zip",
    :sha256 => "316d17e93c51df3e69c6a2897413def34912b99fccd4979787fc5c206da457c5"
  }

  spec.vendored_frameworks = "Sources/VouchSDK.xcframework"

  spec.frameworks = "Foundation", "SwiftUI", "UIKit"
  spec.license = {
    :type => "Custom",
    :text => File.read(File.join(File.dirname(__FILE__), "LICENSE"))
  }
end
