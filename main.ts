import { App, Plugin, MarkdownPostProcessorContext } from 'obsidian';


declare var WaveDrom;

export default class MyPlugin extends Plugin {
	onInit() {

	}


	wavedromProcessor = async (source: string, el: HTMLElement, _: MarkdownPostProcessorContext) => {

		
		const dest = document.createElement('script');
		dest.setAttribute('type', 'WaveDrom');
		source = source.replace(/\n/g, " ");
        dest.innerText = source;
       
		
        el.appendChild(dest);
		console.log('Processed');

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

		// const observer = new MutationObserver(list => {
		// 	WaveDrom.ProcessAll();
		// });

		//observer.observe(document.body, {attributes: true, childList: true, subtree: true});
    }

	utf8_to_b64( str: string ): string {
		return window.btoa(unescape(encodeURIComponent( str )));
	}
	  
	b64_to_utf8( str: string ): string {
		return decodeURIComponent(escape(window.atob( str )));
	}

	refreshHop(): void {
		console.log("hopped");
	}

	refreshHop2(): void {
		console.log("hopped2");
	}

	onunload() {
		console.log('unloading plugin');
	}
}




