# Additional root variables and utility classes on top of tailwind.

### Classes based on root variables

| class             | property               | notes                                                                      |
| ----------------- | ---------------------- | -------------------------------------------------------------------------- |
| max-width-x       | width                  | 1-6, binded to `--max-width-x`, used for content wrap                      |
| main-col-x        | background-color:      | 1-9, binded to `--main-col-x`                                              |
| text-col-x        | color:                 | 1-9, binded to `--main-col-x`                                              |
| fs-x              | font-size              | 1-9, binded to `--fs-x` and `h` elements                                   |
| border-rad-1      | border-radius:         | 1-6, binded to `--border-rad-x`                                            |
| font-fam-x        | font-fam-4             | 1-6, binded to `--font-fam-x`, used when custom fonts are imported         |
| shadow-x          | box-shadow             | 1-6, binded to `--shadow-6`                                                |
| text-x            | font-size, line-height | 1-4, binded to `--fs-x` and `--lh-x`                                       |
| danger-1-bg       | background-color       | binded to `--danger-1-bg`                                                  |
| danger-1-txt      | color                  | binded to `--danger-1-txt`                                                 |
| success-1-bg      | background-color       | binded to `--success-1-bg`                                                 |
| success-1-txt     | color                  | binded to `--success-1-txt`                                                |
| bg-light-select-1 | background-color       | 1-2, binded to `--bg-light-select-1`, used for light selection backgrounds |
| bordex-x-y        | border                 | border-`[px(1-2)]`-`[col(1-3)]`                                            |

### Other root variables

| variable name         | property    | attached to     |
| --------------------- | ----------- | --------------- |
| `--global-bg-col`     | background  | `body`          |
| `--global-txt-col`    | color       | `body`          |
| `--global-font`       | font-family | `body`          |
| `--selection-bg-col`  | background  | `::selection`   |
| `--selection-txt-col` | color       | `::selection`   |
| `--code-bg`           | background  | `code`, `.code` |
| `--code-txt`          | color       | `code`, `.code` |
| `--code-padding`      | padding     | `code`, `.code` |
| `--code-fs`           | font-size   | `code`, `.code` |

### Other util classes

| class              | property               | notes   |
| ------------------ | ---------------------- | ------- |
| fw-x               | font-weight            | 100-900 |
| hidden             | display: none;         |         |
| round              | border-radius: 999px;  |         |
| pointer            | cursor: pointer;       |         |
| remove-decorations | text-decoration: none; |         |
| hover-pointer      | cursor: pointer;       |         |
| hover-underline    | hover-underline        |         |

### Snippets

```html
<!-- Centering content + full width backgrounds -->
<div class="flex-center">
  <div class="max-width-1">content</div>
</div>
```

<!--

button:disabled,
button[disabled] {
  opacity: 0.67;
}

## Purging CSS for SPAs

```
  "scripts": {
    ...
    "postbuild": "purgecss --css dist/assets/*.css --content dist/assets/*.js -o dist/assets/  --safelist html body"
  },
```

-- importing fonts example

  @font-face {
    font-family: "Poppins-Bold";
    src: url(../fonts/Poppins-Bold.ttf);
  }

-- Automatic grid example

  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

-- flex-center class

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }


  --global-font: -apple-system, BlinkMacSystemFont, avenir next, avenir,
    segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif;

-->
