# iconify
html icons for all

### how to use
just make a span with the "`icon`" class. if you want a custom height/width other than the default 16px square size, define it using the internal "`style`" property.

example:
```html
<body>
  <p><span class="icon" style="width:40px;height:40px;">https://this-is-the-url-to-the-icon</span>wow that was an icon</p>
</body>
```
+ the iconify script and some iconify api...
```js
Iconify.Start();
```
### documentation
this may be unneccessary, as there are not a lot of commands.
#### Iconify.Start()
* parameters: none
* returns: Iconify object
* use: restarts iconify if it was ended earlier, also calls `Iconify.Update()` immidiately after.
#### Iconify.Update()
* parameters: none
* returns: Iconify object
* use: is the main part of the project. it takes all objects with class of `icon`, and sets their innerHTML to an image with its `calculatedProperty` `width` and `height`, with an src attribute of the original `innerHTML`.
#### Iconify.End()
* parameters: none
* returns: Iconify object
* use: sets `Iconify.IsDead` to `true`, which stops `Iconify.Update()` from editing elements with class `icon`.

