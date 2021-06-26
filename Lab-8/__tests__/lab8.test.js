describe('Basic user flow for SPA ', () => {
  beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500');
  });

  // test 1 is given
  it('Test1: Initial Home Page - Check for 10 Journal Entries', async () => {
    const numEntries = await page.$$eval('journal-entry', (entries) => {
      return entries.length;
    });
    expect(numEntries).toBe(10);
  });

  // test 2 is given
  it('Test2: Make sure <journal-entry> elements are populated', async () => {
    let allArePopulated = true;
    let data, plainValue;
    const entries = await page.$$('journal-entry');
    for (let i = 0; i < entries.length; i++) {
      data = await entries[i].getProperty('entry');
      plainValue = await data.jsonValue();
      if (plainValue.title.length == 0) { allArePopulated = false; }
      if (plainValue.date.length == 0) { allArePopulated = false; }
      if (plainValue.content.length == 0) { allArePopulated = false; }
    }
    expect(allArePopulated).toBe(true);
  }, 30000);

  it('Test3: Clicking first <journal-entry>, new URL should contain /#entry1', async () => {
    // implement test3: Clicking on the first journal entry should update the URL to contain “/#entry1”
    await page.click('journal-entry');
    
    expect(page.url()).toMatch(/#entry1/);
  });

  it('Test4: On first Entry page - checking page header title', async () => {
    // implement test4: Clicking on the first journal entry should update the header text to “Entry 1” 

    const heading1 = await page.$eval("body > header > h1", el => el.textContent);
    expect(heading1).toBe("Entry 1");

    
  });

  it('Test5: On first Entry page - checking <entry-page> contents', async () => {
    /*
    implement test5: Clicking on the first journal entry should contain the following contents: 
      { 
        title: 'You like jazz?',
        date: '4/25/2021',
        content: "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.",
        image: {
          src: 'https://i1.wp.com/www.thepopcornmuncher.com/wp-content/uploads/2016/11/bee-movie.jpg?resize=800%2C455',
          alt: 'bee with sunglasses'
        }
      }
    */
   
    const correct = { 
      title: 'You like jazz?',
      date: '4/25/2021',
      content: "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.",
      image: {
        src: 'https://i1.wp.com/www.thepopcornmuncher.com/wp-content/uploads/2016/11/bee-movie.jpg?resize=800%2C455',
        alt: 'bee with sunglasses'
      }
    }

    const entry = await page.$('entry-page');
    const data = await (await entry.getProperty('entry')).jsonValue();
    expect(data.title).toEqual(correct.title);
    expect(data.date).toEqual(correct.date);
    expect(data.content).toEqual(correct.content);
    expect(data.image.src).toEqual(correct.image.src);
    expect(data.image.alt).toEqual(correct.image.alt);
     
  }, 10000);

  it('Test6: On first Entry page - checking <body> element classes', async () => {
    // implement test6: Clicking on the first journal entry should update the class attribute of <body> to ‘single-entry’
    const body = await page.evaluate(() => {
      const elem = document.querySelector('body');
      return elem.className;
    });
    //console.log(body);
    expect(body).toBe('single-entry');
  });

  it('Test7: Clicking the settings icon, new URL should contain #settings', async () => {
    // implement test7: Clicking on the settings icon should update the URL to contain “/#settings”
    await page.click('img[alt="settings"]');
    expect(page.url()).toMatch(/#settings/);
  });

  it('Test8: On Settings page - checking page header title', async () => {
    // implement test8: Clicking on the settings icon should update the header to be “Settings”
    const heading1 = await page.$eval("body > header > h1", el => el.textContent);
    expect(heading1).toBe("Settings");
  });

  it('Test9: On Settings page - checking <body> element classes', async () => {
    // implement test9: Clicking on the settings icon should update the class attribute of <body> to ‘settings’
    const body = await page.evaluate(() => {
      const elem = document.querySelector('body');
      return elem.className;
    });
    //console.log(body);
    expect(body).toBe('settings');
  });

  it('Test10: Clicking the back button, new URL should be /#entry1', async() => {
    // implement test10: Clicking on the back button should update the URL to contain ‘/#entry1’
    await page.goBack();
    expect(page.url()).toMatch(/#entry1/);
  });

  // define and implement test11: Clicking the back button once should bring the user back to the home page
  it('Test11: Clicking back button, new URL should be /', async() => {
    await page.goBack();
    expect(page.url()).toBe('http://127.0.0.1:5500/');
  });

  // define and implement test12: When the user if on the homepage, the header title should be “Journal Entries”

  it('Test12: If on homepage title should be "Journal Entries"', async() => {
    const heading1 = await page.$eval("body > header > h1", el => el.textContent);
    expect(heading1).toBe("Journal Entries");
  });


  // define and implement test13: On the home page the <body> element should not have any class attribute 
  it('Test13: If on homepage, body element should have no class', async() => {
    const body = await page.evaluate(() => {
      const elem = document.querySelector('body');
      return elem.className;
    });
    //console.log(body);
    expect(body).toBe("");
  });


  // define and implement test14: Verify the url is correct when clicking on the second entry
  it('Test14: when clicking second entry, verify url is correct' , async() => {
      await page.click('journal-entry + journal-entry');
      expect(page.url()).toMatch(/#entry2/);
    

  });


  // define and implement test15: Verify the title is correct when clicking on the second entry
  it('Test15: When on the second entry, verify the title is current' , async() => {
    const heading1 = await page.$eval("body > header > h1", el => el.textContent);
    expect(heading1).toBe("Entry 2");
  });


  // define and implement test16: Verify the entry page contents is correct when clicking on the second entry
  it('Test16: when clicking on the second entry, verify the entry page content', async() => {
    const correct = {
      "title":"Run, Forrest! Run!",
      "date":"4/26/2021",
      "content":"Mama always said life was like a box of chocolates. You never know what you're gonna get.",
      "image": {
        "src":"https://s.abcnews.com/images/Entertainment/HT_forrest_gump_ml_140219_4x3_992.jpg",
        "alt":"forrest running"
      }
    };
    const entry = await page.$('entry-page');
    const data = await (await entry.getProperty('entry')).jsonValue();
    expect(data).toEqual(correct);
  }, 10000);


  // create your own test 17
  //Test 17: Clicking on the third journal entry should update the URL to contain “/#entry3”
  it('Test17: when clicking third entry, verify url is correct', async() => {
    await page.goBack();
    await page.click('journal-entry + journal-entry + journal-entry');
    expect(page.url()).toMatch(/#entry3/);
    
  });

  // create your own test 18
  //Test 18: Clicking on the fourth journal entry should update the header text to “/#entry4”
  it('Test18: when clicking third entry, verify url is correct'  , async() => {
    await page.goBack();
    await page.click('journal-entry + journal-entry + journal-entry + journal-entry');
    expect(page.url()).toMatch(/#entry4/); 

  });

  // create your own test 19
  //Test 19: Clicking on the fifth journal entry should update the header text to “/#entry5”
  it('Test19: when clicking third entry, verify url is correct'  , async() => {
    await page.goBack();
    await page.click('journal-entry + journal-entry + journal-entry + journal-entry + journal-entry');
    expect(page.url()).toMatch(/#entry5/);
  });

  // create your own test 20
  //Test 20: Clicking on the sixth journal entry should update the header text to “/#entry6”
  it('Test20: when clicking third entry, verify url is correct'  , async() => {
    await page.goBack();
    await page.click('journal-entry + journal-entry + journal-entry + journal-entry + journal-entry + journal-entry');
    expect(page.url()).toMatch(/#entry6/);
  });
  
});