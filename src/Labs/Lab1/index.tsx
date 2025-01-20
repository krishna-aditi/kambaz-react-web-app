export default function Lab1() {
    return (
      <div id="wd-lab1">
        <h2>Lab 1</h2>
        {/*1.2.1*/}
        <h3>HTML Examples</h3>

        <div id="wd-h-tag">
          <h4>Heading Tags</h4>
          Text documents are often broken up into several sections and subsections. Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes. For instance this paragraph is preceded by the heading Heading Tags. The font of the section headings are usually larger and bolder than their subsection headings. This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders in a browser as large headings. There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest heading.
        </div>

        {/*1.2.2*/}
        <div id="wd-p-tag">
          <h4>Paragraph Tag</h4>
          <p id="wd-p-1">
            This is a paragraph. We often separate a long set of sentences with vertical spaces to make the text easier to read. Browsers ignore vertical white spaces and render all the text as one single set of sentences. To force the browser to add vertical spacing, wrap the paragraphs you want to separate with the paragraph tag
          </p>
          
          <p id="wd-p-2">
          This is the first paragraph. The paragraph tag is used to format vertical gaps between long pieces of text like this one.
          </p>
          <p id="wd-p-3">
          This is the second paragraph. Even though there is a deliberate white gap between the paragraph above and this paragraph, by default browsers render them as one contiguous piece of text as shown here on the right.
          </p>
          <p id="wd-p-4">
          This is the third paragraph. Wrap each paragraph with the paragraph tag to tell browsers to render the gaps.
          </p>
        </div>

        {/*1.2.3*/}
        <div id="wd-lists">
          <h4>List Tags</h4>
          <h5>Ordered List Tag</h5>
          How to make pancakes:
          <ol id="wd-pancakes">
            <li>Mix dry ingredients.</li>
            <li>Add wet ingredients.</li>
            <li>Stir to combine.</li>
            <li>Heat a skillet or griddle.</li>
            <li>Pour batter onto the skillet.</li>
            <li>Cook until bubbly on top.</li>
            <li>Flip and cook the other side.</li>
            <li>Serve and enjoy!</li>
          </ol>
          My favorite recipe: Half-fried eggs
          <ol id="wd-your-favorite-recipe">
            <li>Add butter to the pan.</li>
            <li>Crack 3 eggs.</li>
            <li>Add seasoning and herbs of your choice.</li>
            <li>Let it cook until the bottom of the eggs become brown.</li>
          </ol>

          {/*1.2.4*/}
          <h5>Unordered List Tag</h5>
          My favorite books (in no particular order)
          <ul id="wd-my-books">
            <li>Dune</li>
            <li>Lord of the Rings</li>
            <li>Ender's Game</li>
            <li>Red Mars</li>
            <li>The Forever War</li>
          </ul>
          Your favorite books (in no particular order)
          <ul id="wd-your-books">
            <li>Harry Potter and the Prisoner of Azkaban</li>
            <li>Tom Lake</li>
            <li>Tomorrow, and Tomorrow, and Tomorrow</li>
          </ul>
        </div>

        {/*1.2.5*/}
        <div id="wd-tables">
          <h4>Table Tag</h4>
          <table border={1} width="100%">
            <thead> {/*table-head*/}
              <tr> {/*table-row*/}
                <th>Quiz</th> {/*table-heading*/}
                <th>Topic</th>
                <th>Date</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr> {/*table-row*/}
                <td valign="top" align="center">Q1</td> {/*table-data*/}
                <td valign="top" align="center">HTML</td>
                <td valign="top" align="center">2/3/21</td>
                <td valign="top" align="center">85</td>
              </tr>
              <tr>
                <td valign="top" align="center">Q2</td>
                <td valign="top" align="center">CSS</td>
                <td valign="top" align="center">2/10/21</td>
                <td valign="top" align="center">90</td>
              </tr>
              <tr> {/*table-row*/}
                <td valign="top" align="center">Q3</td> {/*table-data*/}
                <td valign="top" align="center">HTML2</td>
                <td valign="top" align="center">2/17/21</td>
                <td valign="top" align="center">85</td>
              </tr>
              <tr>
                <td valign="top" align="center">Q4</td>
                <td valign="top" align="center">CSS2</td>
                <td valign="top" align="center">2/21/21</td>
                <td valign="top" align="center">90</td>
              </tr>
              <tr> {/*table-row*/}
                <td valign="top" align="center">Q5</td> {/*table-data*/}
                <td valign="top" align="center">HTML3</td>
                <td valign="top" align="center">2/28/21</td>
                <td valign="top" align="center">95</td>
              </tr>
              <tr>
                <td valign="top" align="center">Q6</td>
                <td valign="top" align="center">CSS3</td>
                <td valign="top" align="center">3/7/21</td>
                <td valign="top" align="center">90</td>
              </tr>
              <tr> {/*table-row*/}
                <td valign="top" align="center">Q7</td> {/*table-data*/}
                <td valign="top" align="center">HTML4</td>
                <td valign="top" align="center">3/14/21</td>
                <td valign="top" align="center">90</td>
              </tr>
              <tr>
                <td valign="top" align="center">Q8</td>
                <td valign="top" align="center">CSS4</td>
                <td valign="top" align="center">3/21/21</td>
                <td valign="top" align="center">100</td>
              </tr>
              <tr> {/*table-row*/}
                <td valign="top" align="center">Q9</td> {/*table-data*/}
                <td valign="top" align="center">HTML5</td>
                <td valign="top" align="center">3/28/21</td>
                <td valign="top" align="center">80</td>
              </tr>
              <tr>
                <td valign="top" align="center">Q10</td>
                <td valign="top" align="center">CSS5</td>
                <td valign="top" align="center">4/4/21</td>
                <td valign="top" align="center">95</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td valign="top" align="center" colSpan={3}>Average</td>
                <td valign="top" align="center">90</td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/*1.2.6*/}
        <div id="wd-images">
          <h4>Image tag</h4>
          Loading an image from the internet: <br />
          <img id="wd-starship" width="400px"
          src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg" />
          <br />
          Loading a local image:
          <br />
          <img id="wd-teslabot" src="images/teslabot.jpg" height="200px" />
        </div>

        {/*1.2.7*/}
        <div id="wd-forms">
          <h4>Form Elements</h4>
          {/*1.2.7.1*/}
          <form id="wd-text-fields">
            <h5>Text Fields</h5>
            <label htmlFor="wd-text-fields-username">Username:</label>
            <input placeholder="jdoe" id="wd-text-fields-username" /> 
            <br />
            <label htmlFor="wd-text-fields-password">Password:</label>
            <input type="password" value="123@#$asd" id="wd-text-fields-password" />
            <br />

            <label htmlFor="wd-text-fields-first-name">First name:</label>
            <input type="text" title="John" id="wd-text-fields-first-name" /> 
            <br />
            <label htmlFor="wd-text-fields-last-name">Last name:</label>
            <input type="text" placeholder="Doe"
                  value="Wonderland"
                  title="The last name"
                  id="wd-text-fields-last-name" />

            {/* copy rest of form elements here  */}

            {/*1.2.7.2*/}
            <h5>Text boxes</h5>
            <label>Biography:</label><br/>
            <textarea id="wd-textarea" cols={30} rows={10}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</textarea>

            {/*1.2.7.3*/}
            <h5 id="wd-buttons">Buttons</h5>
            <button type="button"
                    onClick={() => alert("Life is Good!")}
                    id="wd-all-good">
              Hello World!
            </button>

            {/*1.2.7.4*/}
            <h5 id="wd-radio-buttons">Radio buttons</h5>

            <label>Favorite movie genre:</label><br />
            {/*name == group name*/}
            <input type="radio" name="radio-genre" id="wd-radio-comedy"/> 
            <label htmlFor="wd-radio-comedy">Comedy</label><br />

            <input type="radio" name="radio-genre" id="wd-radio-drama"/>
            <label htmlFor="wd-radio-drama">Drama</label><br />

            <input type="radio" name="radio-genre" id="wd-radio-scifi"/>
            <label htmlFor="wd-radio-scifi">Science Fiction</label><br />

            <input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
            <label htmlFor="wd-radio-fantasy">Fantasy</label>

            {/*1.2.7.5*/}
            <h5 id="wd-checkboxes">Checkboxes</h5>
            <label>Favorite movie genre:</label><br/>

            <input type="checkbox" name="check-genre" id="wd-chkbox-comedy"/>
            <label htmlFor="wd-chkbox-comedy">Comedy</label><br/>

            <input type="checkbox" name="check-genre" id="wd-chkbox-drama"/>
            <label htmlFor="wd-chkbox-drama">Drama</label><br/>

            <input type="checkbox" name="check-genre" id="wd-chkbox-scifi"/>
            <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br/>

            <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy"/>
            <label htmlFor="wd-chkbox-fantasy">Fantasy</label>

            {/*1.2.7.6*/}
            <h4 id="wd-dropdowns">Dropdowns</h4>

            <h5>Select one</h5>
            <label  htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br/>
            <select id="wd-select-one-genre">
              <option value="COMEDY">Comedy</option>
              <option value="DRAMA">Drama</option>
              <option selected value="SCIFI">Science Fiction</option>
              <option value="FANTASY">Fantasy</option>
            </select>

            <h5>Select many</h5>
            <label  htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br/>
            <select multiple id="wd-select-many-genre">
              <option value="COMEDY" selected> Comedy          </option>
              <option value="DRAMA">           Drama           </option>
              <option value="SCIFI"  selected> Science Fiction </option>
              <option value="FANTASY">         Fantasy         </option>
            </select>


          </form>
        </div>
        
        {/*1.2.7.7*/}
        <h4>Other HTML field types</h4>
        <form>
          <label htmlFor="wd-text-fields-email"> Email: </label>
          <input type="email"
                placeholder="jdoe@somewhere.com"
                id="wd-text-fields-email"/><br/>

          <label htmlFor="wd-text-fields-salary-start"> Starting salary:</label>
          <input type="number"
                value="100000"
                placeholder="1000"
                id="wd-text-fields-salary-start"/><br/>

          <label htmlFor="wd-text-fields-rating"> Rating: </label>
          <input type="range"
                value="4"
                max="5"
                placeholder="Doe"
                id="wd-text-fields-rating"/><br/>

          <label htmlFor="wd-text-fields-dob"> Date of birth: </label>
          <input type="date"
                value="2000-01-21"
                id="wd-text-fields-dob"/><br/>
        </form>

        {/*1.2.8*/}
        <h4>Anchor tag</h4>
        Please 
        <a href="https://www.lipsum.com" id="wd-lipsum"> click here </a>
        to get dummy text
        <br/>
        <a href="https://github.com/krishna-aditi/kambaz-react-web-app" id="wd-github">Click here </a> for Aditi's Github repository
        <br/>

      </div>
        
  );}
  