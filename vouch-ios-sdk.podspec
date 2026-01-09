Pod::Spec.new do |spec|
  spec.name         = "vouch-ios-sdk"
  spec.version      = "0.0.3"
  spec.summary      = "Binary iOS framework for integrating with the Vouch platform"
  spec.description  = <<-DESC
                      The Vouch iOS SDK provides a binary framework for integrating
                      with the Vouch platform. It enables proof generation and verification
                      capabilities in your iOS applications.
                      DESC

  spec.homepage     = "https://github.com/vlayer-xyz/vouch-ios-sdk"
  spec.license      = { :type => "MIT", :file => "LICENSE" }
  spec.author       = { "Vouch" => "https://getvouch.io" }

  spec.platform     = :ios, "17.0"
  spec.swift_version = "6.1"

  spec.source       = { :git => "https://github.com/vlayer-xyz/vouch-ios-sdk.git", :tag => "v#{spec.version}" }

  spec.vendored_frameworks = "Sources/VouchSDK.xcframework"

  spec.frameworks = "Foundation", "SwiftUI"
end
