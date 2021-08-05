import { App, Plugin, MarkdownPostProcessorContext } from 'obsidian';
import { wavedromsrc, defaultsrc } from "./wrapwave";

declare var WaveDrom;

export default class ObsidianWaveDrom extends Plugin {
	onInit() {

	}


	wavedromProcessor = async (source: string, el: HTMLElement, _: MarkdownPostProcessorContext) => {
		
		// Create the source object
		const wrapper = document.createElement('div');
		wrapper.setAttribute('align', 'center');

		const dest = document.createElement('script');
		dest.setAttribute('type', 'WaveDrom');
		source = source.replace(/\n/g, " ");
        dest.innerText = source;

		wrapper.appendChild(dest);
		el.appendChild(wrapper);

		// Probably a better way to do this
		// This works for now though.
		setTimeout(() => {	  
     		WaveDrom.ProcessAll();
		}, 5);

		//console.log('Processed');

    };

    onload(): void {
		if( !window.hasOwnProperty("WaveDrom") ) {
			console.log('loading plugin wavedrom');
			var wavedromDefault = document.createElement('script');
			var wavedromMin = document.createElement('script');
			wavedromMin.setAttribute('src', wavedromsrc);
			wavedromDefault.setAttribute('src', defaultsrc);
			wavedromMin.setAttribute('type','text/javascript');
			wavedromDefault.setAttribute('type','text/javascript');
	
			document.head.appendChild(wavedromDefault);
			document.head.appendChild(wavedromMin);
		}

        this.registerMarkdownCodeBlockProcessor("wavedrom", this.wavedromProcessor);
    }

	onunload() {
		console.log('unloading plugin');
	}
}




