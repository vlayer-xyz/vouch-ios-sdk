//
//  ExampleApp.swift
//  Example
//
//  Created by Krzysztof Moczała on 19/01/2026.
//

import SwiftUI
import VouchSDK

@main
struct ExampleApp: App {
  let sdk = VouchSDK.SDK(customerId: "YOUR_CUSTOMER_ID", apiKey: "YOUR_API_KEY")

  var body: some Scene {
    WindowGroup {
      ContentView(sdk: sdk)
    }
  }
}
