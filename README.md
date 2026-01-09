# Vouch iOS SDK
This repository contains a binary iOS framework for integrating with the Vouch platform.

# Documentation
For detailed documentation, please visit our [official docs](https://docs.getvouch.io/mobile-introduction).

# Installation

## Swift Package Manager
In Xcode, go to `File` -> `Add Packages...` and enter the following URL:
```
https://github.com/vlayer-xyz/vouch-ios-sdk
```

Select the latest version and add the package to your project.

## CocoaPods
Add the following line to your `Podfile`:
```ruby
pod 'vouch-ios-sdk'
```

Then run:
```bash
pod install
```

# Usage
Import the Vouch framework in your Swift files:
```swift
import VouchSDK
```
Initialize the Vouch SDK
```swift
let sdk = VouchSDK.SDK(customerId: "your_customer_id")
```
Start proof by calling the `start` method providing data source id, customer id (provided by Vouch), webhook url (to receive proof results) and a callback:
```swift
sdk.start(
    dataSourceId: "your_data_source_id",
    webhookUrl: "https://your-webhook-url.com",
    callback: { result in
        switch result {
        case .success(let proofResult):
            print("Proof completed: \(proofResult.proofId)")
        case .failure(let error):
            print("Proof failed with error: \(error)")
        }

    }
)
```
The `start` method returns a SwiftUI view that you can present in your app.
