import { Plugin, MarkdownPostProcessorContext, MarkdownPostProcessor, MarkdownPreviewRenderer } from 'obsidian';
// @ts-ignore type declaration
import waveskin from 'wavedrom/skins/default'
import { parse } from 'json5'
import { WaveDromType } from 'types';

let Wavedrom: WaveDromType

export default class ObsidianWaveDrom extends Plugin {
  postProcessors: Map<string, MarkdownPostProcessor>

  async onload() {
    this.postProcessors = new Map()
    // @ts-ignore type declaration
    Wavedrom = (await import('wavedrom/wavedrom.unpkg')).default as WaveDromType
    this.registerWaveDromBlock('wavedrom')

    console.log('Obsidian wavedrom loaded')
  }

  registerWaveDromBlock(prefix: string) {
    this.postProcessors.set(
      prefix,
      this.registerMarkdownCodeBlockProcessor(
        prefix,
        (src, el, ctx) => this.postProcessor(prefix, src, el, ctx)
      )
    )
  }

  postProcessor(
    _prefix: string,
    src: string,
    el: HTMLElement,
    _?: MarkdownPostProcessorContext,
  ) {
    const source = parse(src)
    Wavedrom.renderWaveElement(Date.now(), source, el, waveskin)
  }

  unregister() {
    this.postProcessors.forEach((value) => {
      MarkdownPreviewRenderer.unregisterPostProcessor(value)
    })
    this.postProcessors.clear()
  }

  onunload() {
    this.unregister()
    console.log('Obsidian wavedrom unloaded')
  }
}




