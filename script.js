function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

		var colors = [
			'#490A3D',
			'#BD1550',
			'#E97F02',
			'#F8CA00',
			'#8A9B0F',
			'#69D2E7',
			'#FA6900',
			'#16a085',
			'#27ae60',
			'#2c3e50',
			'#f39c12',
			'#e74c3c',
			'#9b59b6',
			'#FB6964',
			'#342224',
			'#472E32',
			'#77B1A9',
			'#73A857',
			'#989898',
			'#FF8364'
		];

var quotes = [
    ["Although we haven't been able to see each other as much as we have liked this year, thank you for your love and support each day to get me through!."],
    ["Mum, you are my biggest inspiration and influence. Thank you for everything you have done to support me and for making me the man I am now."],
    ["This is the beginning of a new, exciting journey through motherhood. Enjoy your very first Mother's Day!"],
	["Biology is the least of what makes someone a mother. I love you and I am proud you are a part of my life."]
	["Thank you for being someone I could always look up to, Mom. I don't know what I'd do without you."],
	["Sorry for driving you crazy sometimes, it was just because I love you so much, Mom."],
	["I appreciate everything you do for us and our family. You're the greatest role model I could ever ask for our kids."],
	["Thank you for every hug, word of encouragement, and the act of love you’ve given me. Happy Mother’s Day!"],
	["Happy Mother’s Day! Thank you for always being the shining example of what I wanted to be like when I grew up!"],
	["Raising me took a lot of patience and strength. Thanks for hanging in there. I love you."]
	["Happy Mother's Day to my best friend and my cheapest therapist."],
    ["Thank you for being the only Mother in the world who would love a crazy child like me."],
    ["Happy Mother’s Day to a woman who truly does it all! I love you so much! Thank you for everything you do for us!"],
	["I feel so lucky to have you as my mom. Thanks for always believing in me and doing so much for me each day. Have a great Mother’s Day, you deserve to be spoiled!"]
	["It’s my time to tell you how fortunate and special I am to be blessed with a mother as caring, loving as you. Wish you a happy Mother’s Day, Mom!"],
	["Mom, thank you for being my anchor in this stormy sea of life. I love you and don’t know where I’d be without you. Have a great day today."],
	["Happy Mother’s Day to my very own superhero and the Number one problem-solver in my life. I hope you have a great day!"],
	["Growing up I don’t think I realized just how much you did to keep our day-to-day life running so smoothly. Now that I’m grown up, I am in awe of everything you did for us, and I admire you all the more. Thank you for making my childhood such a special one! I love you, Mom!"],
	["Thank you Mom for showing me how to be the best version of myself. I am a strong woman because a strong woman raised me. I am so thankful for everything you’ve done for me."]
	["Happy Mother’s Day to the greatest mom! We don’t say it enough, but we really appreciate all that you do for us every day. You are truly the glue that holds our family together!"],
	];

var currentQuote = "";
var linkGenerated = "https://vercel.com/ril-mothers-day";
var randomquote = "";
var randomcolor = "";

function getQuote() {
	randomquote = Math.floor(Math.random() * quotes.length);
	randomcolor = Math.floor(Math.random() * colors.length);
    currentQuote = quotes[randomquote][0];
    // currentAuthor = quotes[randomquote][1];
	if (inIframe()) {
		$('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=RILMothersDay&related=aLamm&text=' + encodeURIComponent('"' + currentQuote + "" + linkGenerated));
	}

	$(document).ready(function () {
	    $('html body').animate({
	        backgroundColor: colors[randomcolor],
	        color: colors[randomcolor]
	    }, 500);
	    $('#newquote, #tweetquote #copy .social-icons .fa-twitter').animate({ backgroundColor: colors[randomcolor] }, 500);
			$('#tweetquote, #copy, blockquote footer').animate({ color: colors[randomcolor] }, 500);	
	    $('#tweetquote, blockquote').animate({ borderLeftColor: colors[randomcolor] }, 500);
		$('#tweetquote, blockquote').animate({ borderRightColor: colors[randomcolor] }, 500);
		$('#tweetquote, #copy, blockquote').animate({ borderColor: colors[randomcolor] }, 500);
		$('#tweetquote, blockquote').animate({ borderLeftColor: colors[randomcolor] }, 500);
	    $('#quotetext').animate({ opacity: 0 }, 500, function () {
	        $(this).animate({ opacity: 1 }, 500);
	        $(this).text(currentQuote);
	    });
	    $('#quotesource').animate({ opacity: 0 }, 500, function () {
	        $(this).animate({ opacity: 1 }, 500);
	        // $(this).text(currentAuthor);
	    });
    });    
}

function openURL(url) {
    window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

getQuote();

$(document).ready(function () {
    $('#newquote').on('click', getQuote);

	$('#tweetquote').on('click', function () {
        if (!inIframe()) {
            openURL('https://twitter.com/intent/tweet?hashtags=RILMothersDay&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + "" + linkGenerated));
        }
    });

	$('#copy').on('click', function () {
		navigator.clipboard.writeText(currentQuote);
	});

    
});