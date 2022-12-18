export interface WaveDromType {
  eva: (id: number) => string
  onml: {
    stringify: () => string
  }
  processAll: () => void
  renderAny: (index: number, source2: any, waveSkin: any, notFirstSignal?: boolean) => HTMLElement
  renderWaveElement: (index: number, source2: any, outputElement: HTMLElement, waveSkin: any, notFirstSignal?: boolean) => void
  renderWaveForm: (index: number, source2: any, output: HTMLElement, notFirstSignal?: boolean) => void
  version: string
  waveSkin: {
    default: any
  }
}
