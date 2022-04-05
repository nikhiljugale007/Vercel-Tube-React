import { v4 as uuid } from "uuid";

const TabData = ["All", "Test", "ODI", "T20"];

const videos = [
	{
		_id: uuid(),
		url: "https://www.youtube.com/embed/rpPCjyVfQOo",
		title: "Ind Vs Aus| Dettol One Day Series 2020 | ",
		description:
			"Watch the full highlights of the action-packed third Dettol ODI in Canberra as India claimed a consolation victory to finish the 50-over series with Hardik Pandya and Shardul Thakur the heroes for the visitors.",
		authorImageUrl:
			"https://yt3.ggpht.com/ytc/AKedOLSaliAXEasGek2J2eYdjkofH1rvdqZ4V320tT-NVRU=s176-c-k-c0x00ffffff-no-rj",
		thumbnailImageUrl:
			"https://images.indianexpress.com/2020/12/India-vs-Australia.jpg",
		channelName: "Cricket.com au IV",
		categoryName: "ODI",
	},
	{
		_id: uuid(),
		url: "https://www.youtube.com/embed/Y1J9_9-vNcU",
		title: "England v India - Day 5 Highlights | 2nd LV= Insurance Test 2021",
		description:
			"Watch match highlights from Day 5 the 2nd LV= Insurance Test between England and India at Lord's.",
		authorImageUrl:
			"https://yt3.ggpht.com/ytc/AKedOLQ1IkePr9q5BHgj3WLQcL8Xn1cm7ScXo2NU-Gz7eQ=s176-c-k-c0x00ffffff-no-rj",
		thumbnailImageUrl:
			"https://static.toiimg.com/thumb/imgsize-193479,msid-85364193,width-400,resizemode-4/85364193.jpg",
		channelName: "England & Wales Cricket Board",
		categoryName: "Test",
	},
	{
		_id: uuid(),
		url: "https://www.youtube.com/embed/OeGTSVJV9nQ",
		title: "3rd ODI | India vs Srilanka | India tour of Sri Lanka",
		description:
			"India sealed the ODI series with a fantastic win over Sri Lanka thanks to Deepak Chahar's heroics. The Lankans entered to bat first and finished with a score of 275 for 9 after 50 overs.",
		authorImageUrl:
			"https://yt3.ggpht.com/a4AOsw2qHfuXAooYs7EMkwqJMmW_Wbqebpzm8Xmf2Rj_95QMLnAAFDNRNOJG-sSoairOXvQKrS8=s176-c-k-c0x00ffffff-no-rj",
		thumbnailImageUrl:
			"https://static.toiimg.com/thumb/imgsize-577434,msid-84671878,width-400,resizemode-4/84671878.jpg",
		channelName: "Sony Liv",
		categoryName: "ODI",
	},
	{
		_id: uuid(),
		url: "https://www.youtube.com/watch?v=Mvs1JXYfd6Q",
		title: "Super Over Thriller| 4th T20 | Ind vs Nz",
		description:
			"The visiting Indian team took a 4-0 lead in the five match T20 series against the BLACKCAPS at SKY Stadium in another thriller.",
		authorImageUrl:
			"https://yt3.ggpht.com/ytc/AKedOLQbBVJpSNM18auNG6WO8AOJlt6QcAGxb8LZLxLk=s176-c-k-c0x00ffffff-no-rj",
		thumbnailImageUrl:
			"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202111/AP21321476140807_0_1200x768.jpeg?qjxHA8gdU9PF4QYWWemh8NLUUXhZMDo8&size=770:433",
		channelName: "NZC",
		categoryName: "T20",
	},
];
export { TabData, videos };
