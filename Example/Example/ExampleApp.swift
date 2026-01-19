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
  let sdk = VouchSDK.SDK(customerId: "1be03be8-5014-413c-835a-feddf4020da2")

  var body: some Scene {
    WindowGroup {
      ContentView(sdk: sdk)
    }
  }
}
