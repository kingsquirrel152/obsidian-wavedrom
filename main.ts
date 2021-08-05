import { App, Plugin, MarkdownPostProcessorContext } from 'obsidian';
import { wavedromsrc, defaultsrc } from "./wrapwave";

declare var WaveDrom;

export default class ObsidianWaveDrom extends Plugin {
	onInit() {

	}


	wavedromProcessor = async (source: string, el: HTMLElement, _: MarkdownPostProcessorContext) => {
		
		// Give our wavedrom input node a unique name
		let r = (Math.random() + 1).toString(36).substring(7);

		// Create the source object
		const wrapper = document.createElement('div');
		wrapper.setAttribute('align', 'center');

		// Use the parent wrapper as the wavedrom display
		wrapper.setAttribute('id', 'WaveDrom_Display_' + r);
		el.appendChild(wrapper);


		// Create script node with wavedrom json contents
		const inputjson = document.createElement('script');
		inputjson.setAttribute('type', 'WaveDrom');
		source = source.replace(/\n/g, " ");
        inputjson.innerText = source;
		inputjson.setAttribute('id', 'InputJSON_' + r);

		// Eval the script node into a form the wavedrom expects
		var obj = WaveDrom.evaObject(inputjson);

		// Render it to the wrapper div!
		WaveDrom.RenderWaveElement(r, obj, wrapper, window.WaveSkin, false);
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

			document.head.innerHTML += '<style type="text/css">div.wavedromMenu{position:fixed;border:solid 1pt#CCCCCC;background-color:white;box-shadow:0px 10px 20px #808080;cursor:default;margin:0px;padding:0px;}div.wavedromMenu>ul{margin:0px;padding:0px;}div.wavedromMenu>ul>li{padding:2px 10px;list-style:none;}div.wavedromMenu>ul>li:hover{background-color:#b5d5ff;}</style>';

		}

        this.registerMarkdownCodeBlockProcessor("wavedrom", this.wavedromProcessor);
    }

	onunload() {
		console.log('unloading plugin');
	}
}




