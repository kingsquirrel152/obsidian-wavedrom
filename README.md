## Obsidian Sample Plugin

This is a sample plugin for Obsidian (https://obsidian.md).

This project uses Typescript to provide type checking and documentation.
The repo contains the latest plugin API (obsidian.d.ts) in Typescript Definition format, which contains TSDoc comments describing what it does.

**Note:** The Obsidian API is still in early alpha and is subject to change at any time!

### How to use

- Clone this repo.
- `npm i` or `yarn` to install dependencies
- `npm run dev` to start compilation in watch mode.

### How to install the plugin

- Copy over `main.js`, `styles.css`, `manifest.json` to your vault `vault/.obsidian/plugins/plugin-id/`.

### API Documentation

See https://github.com/obsidianmd/obsidian-api



```wavedrom
{reg: [
    {bits: 7,  name: 'opcode',    attr: 'OP-IMM'},
    {bits: 5,  name: 'rd',        attr: 'dest'},
{bits: 3,  name: 'func3',     attr: ['ADDI', 'SLTI', 'SLTIU', 'ANDI', 'ORI','XORI'], type: 4},
    {bits: 5,  name: 'rs1',       attr: 'src'},
    {bits: 12, name: 'imm[11:0]', attr: 'I-immediate[11:0]', type: 3}

],
config: {hspace: "width"}}
```

```wavedrom  
{ signal : [            
  { name: "clk",  wave: "p........"  },
  { name: "bus",  wave: "x.34.555x",   data: "head body tail" },
  { name: "wire", wave: "0.1..........0." },
]}
```

