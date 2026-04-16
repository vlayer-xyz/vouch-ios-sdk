//
//  ContentView.swift
//  Example
//
//  Created by Krzysztof Moczała on 19/01/2026.
//

import SwiftUI
import VouchSDK

struct ContentView: View {
  private let sdk: VouchSDK.SDK
  @State private var popoverVisible = false

  init(sdk: VouchSDK.SDK) {
    self.sdk = sdk
  }

  var body: some View {
    VStack {
      Text("Start Example.com verification")
      Button("Start") {
        Task {
          do {
            try await sdk.initialize()
            popoverVisible = true
          } catch let error as VouchError {
            handle(error: error)
          }
        }

      }
    }
    .padding()
    .popover(isPresented: $popoverVisible) {
      sdk.start(
        dataSourceId: "e03b846f-58ce-4ae7-b96e-c454c5a1314e",
        webhookUrl: "https://your-webhook-url.com",
        inputs: [:],
        callback: { result in
          switch result {
          case .success(let success):
            print("Proof id: \(success.proofId)")
          case .failure(let error):
            handle(error: error)
          }
          popoverVisible = false
        }
      )
    }
  }

  private func handle(error: VouchError) {
    print("Proof id: \(error.proofId)")
    switch error.reason {
    case .dataSourceOrCustomerNotFound:
      print("Data source or customer not found.")
    case .outdatedVersion:
      print("Outdated SDK.")
    case .creatingProofRequestFailed:
      print("Creating proof request failed.")
    case .backgroundTimeout:
      print("Background timeout.")
    case .requestTooLarge:
      print("Request too large.")
    case .dataSourceMisconfigured:
      print("Data source misconfigured.")
    case .provingFailed:
      print("Proving failed.")
    case .proofUploadFailed:
      print("Proof upload failed.")
    case .attachmentReuploadFailed:
      print("Attachment reupload failed.")
    case .networkConnectionLost:
      print("Connection error.")
    case .proofIdTaken:
      print("Proof id taken.")
    case .processingTimeout:
      print("Processing timeout.")
    case .apiKey:
      print("Wrong API key.")
    case .internalServer:
      print("Internal server error.")
    case .uninitialized:
      print("SDK unitialized.")
    @unknown default:
      print("Unknown error.")
    }
  }
}
