## README: [简体中文](./Readme_zh-CN.md) | English

## What is tv-remote-control ?

`tv-remote-control` is a tv remote control simulator running on the browser. With it, you can easily remotely control the Android TV or other Android devices connected to your computer just simply by clicking buttons, no more complicated adb command since today!

![display](src/common/display.png)

## Getting Started

### Global Installing

First, you need to install the `tv-remote-control` globally.

```sh
npm install tv-remote-control -g
```

### Connecting Device

Ensure the USB debugging of device (Android system) is allowed, and then connect your device to your computer. Once connected, you may use the command below to check if the device connects successfully.

```sh
adb devices 
```

### Launch the tv-remote-control service

You can run the command below to launch the tv-remote-control service.

```sh
trc start
```

Available Params：

| Attribute    | Type   | Description                                                                                |
| ----------- | ------ | ----------------------------------------------------------------------------------- |
| --port, -p | number | specify the port of the remote control page <br/>eg：use `trc start -p 3002` or `trc start --port 3002` to run the service at port 3002|

After you ran the command above, `tv-remote-control` will automatically start the page on default browser that the
address is `http://127.0.0.1:<port>/index.html`.

You can now click the button on the page or press specified keyboard key to simulate the remote control operating the tv
device that connects to your computer.

Note: you can also copy the address mentioned above and paste it at the browser to manually run the tv-remote-control
page.

### Description of the Keys

A detailed description of the buttons and keyboard keys you can use is listed in the table below.

| Button  | Key of Keyboard| Command of Tv Remote Control |
| ------- | -------------- | ---------  |
| up      | up             | up         |
| left    | left           |left        |
| right   | right          |right       |
| down    | down           | down       |
| ok      | enter          | ok         |
| menu    | shift          | menu       |
| back    | B              | back       |

Note: you can also manually run specify remote control commands by
visiting `http://127.0.0.1:<port>/[up]|[left]|[right]|[down]|[ok]|[menu]|[back]`.
