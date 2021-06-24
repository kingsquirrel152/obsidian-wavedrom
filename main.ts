import { wrap } from 'module';
import { App, Plugin, MarkdownPostProcessorContext } from 'obsidian';


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
		}, 250);

		//console.log('Processed');

    };

    onload(): void {
		var wavedromDefault = document.createElement('script');
		var wavedromMin = document.createElement('script');
		wavedromMin.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/wavedrom/2.6.8/wavedrom.min.js');
		wavedromDefault.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/wavedrom/2.6.8/skins/default.js');
		wavedromMin.setAttribute('type','text/javascript');
		wavedromDefault.setAttribute('type','text/javascript');

		document.head.appendChild(wavedromDefault);
		document.head.appendChild(wavedromMin);
        console.log('loading plugin wavedrom');
		
		this.registerCodeMirror((cm: CodeMirror.Editor) => {
			console.log('codemirror', cm);
		});


        this.registerMarkdownCodeBlockProcessor("wavedrom", this.wavedromProcessor);
    }

	onunload() {
		console.log('unloading plugin');
	}
}




