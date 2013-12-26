##checkpointJS

link preview: www.grupoartway.com.br/checkpointjs

This is a easy way you call functions when user is on some specific section of your web page.
Sometimes we have animations but we need play these animations only when user is seeing this elements. So how we do that?

CheckpointJS is a plugin that enable you to configure checkpoints on your page using ID to uses as listeners. It's easy to uses.

###How to use?

- Put the script file on your page

	    <script type="text/javascript" src="../src/js/checkpointjs.js"></script>
- Call checkpoint function on your page.

			// checkpoint
			checkpointjs({
				'elem':'element-ID',				//id of element
				'offset': 0,							//offset betweenn screen bottom and element top
				'after': function () { //... put code that will execute when element-ID is on screen }
				'before': function () { //... put code that will execute when page is onload }
			});			

**There are 4 options on checkpointJS.**

###elem
The `elem` option is the element ID of your checkpoint. you can put any ID of any element of your page.

###offset
The `offset` option is the space between bottom screen and the element top to execute some function. If you put value 'zero', the function will execute when the distance of element and screen is 'zero'.

###after
This is the function that will execute when offset of element is TRUE. If you put offset value 'zero', the function on 'after' will execute when element is showed on the screen.

###before (not necessary)
This is a function that you can call when page is onload.



##When uses?
You can use this a lot of times. You can call some CSS animation when your user scroll 100px down the page. you can call javascript funtions when user is on footer of your page. Be creative!


##Considerations
CheckpointJS is a little plugin that i've developed to help a lots of peoples who ask on internet how to do that using Jquery, Zeptos or another framework.

CheckpointJS is pure javascript, is lightweight, easy to use and fast to you execute on any project.

Enjoy it!