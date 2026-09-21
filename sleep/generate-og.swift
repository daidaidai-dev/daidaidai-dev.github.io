import AppKit

let width = 1200
let height = 630
let output = CommandLine.arguments.count > 1 ? CommandLine.arguments[1] : "docs/assets/brand/og.jpg"
let artboardPath = CommandLine.arguments.count > 2 ? CommandLine.arguments[2] : "docs/assets/artboards/01-nemuru-mae-kara-iphone.jpg"

guard let artboard = NSImage(contentsOfFile: artboardPath),
      let bitmap = NSBitmapImageRep(
        bitmapDataPlanes: nil,
        pixelsWide: width,
        pixelsHigh: height,
        bitsPerSample: 8,
        samplesPerPixel: 4,
        hasAlpha: true,
        isPlanar: false,
        colorSpaceName: .deviceRGB,
        bytesPerRow: 0,
        bitsPerPixel: 0
      ),
      let context = NSGraphicsContext(bitmapImageRep: bitmap)
else { fatalError("Cannot create OG image") }

NSGraphicsContext.saveGraphicsState()
NSGraphicsContext.current = context
context.imageInterpolation = .high

NSColor(calibratedRed: 1, green: 0.972, blue: 0.961, alpha: 1).setFill()
NSRect(x: 0, y: 0, width: width, height: height).fill()
NSColor(calibratedRed: 0.89, green: 0.97, blue: 0.97, alpha: 1).setFill()
NSBezierPath(ovalIn: NSRect(x: 665, y: -165, width: 690, height: 800)).fill()
NSColor(calibratedRed: 1, green: 0.87, blue: 0.92, alpha: 0.7).setFill()
NSBezierPath(ovalIn: NSRect(x: -245, y: 350, width: 550, height: 390)).fill()

let shadow = NSShadow()
shadow.shadowColor = NSColor(calibratedWhite: 0.3, alpha: 0.2)
shadow.shadowBlurRadius = 24
shadow.shadowOffset = NSSize(width: 0, height: -12)
NSGraphicsContext.saveGraphicsState()
shadow.set()
artboard.draw(in: NSRect(x: 769, y: -260, width: 320, height: 695),
              from: .zero, operation: .sourceOver, fraction: 1)
NSGraphicsContext.restoreGraphicsState()

func draw(_ value: String, x: CGFloat, y: CGFloat, size: CGFloat, color: NSColor, weight: NSFont.Weight = .bold) {
    let attributes: [NSAttributedString.Key: Any] = [
        .font: NSFont.systemFont(ofSize: size, weight: weight),
        .foregroundColor: color
    ]
    (value as NSString).draw(at: NSPoint(x: x, y: y), withAttributes: attributes)
}

let purple = NSColor(calibratedRed: 0.36, green: 0.34, blue: 0.59, alpha: 1)
let pink = NSColor(calibratedRed: 0.84, green: 0.29, blue: 0.53, alpha: 1)
draw("ねむもこ  |  睡眠と体調管理", x: 72, y: 495, size: 25, color: purple)
draw("眠る前から、", x: 68, y: 335, size: 72, color: purple, weight: .heavy)
draw("起きたあとまで", x: 68, y: 238, size: 72, color: pink, weight: .heavy)
draw("眠りと毎日の調子を、やさしく記録。", x: 72, y: 156, size: 26, color: purple)
draw("カレンダー・グラフ・分析・直近7日の振り返り", x: 72, y: 109, size: 19, color: purple, weight: .medium)

context.flushGraphics()
NSGraphicsContext.restoreGraphicsState()
guard let imageData = bitmap.representation(using: .jpeg, properties: [.compressionFactor: 0.84]) else {
    fatalError("Cannot encode OG image")
}
try imageData.write(to: URL(fileURLWithPath: output))
