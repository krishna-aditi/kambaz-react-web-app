import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Paddings from "./Paddings";
import Margins from "./Margins";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import ReactIconsSampler from "./ReactIcons";
import { Container } from "react-bootstrap";
import BootstrapGrid from "./BootstrapGrids";
import ScreenSizeLabel from "./ScreenSizeLabel";
import BootstrapTables from "./BootstrapTables";
import BootstrapList from "./BootstrapLists";
import BootstrapForm from "./BootstrapForms";
import BootstrapNavigation from "./BootstrapNavigation";

export default function Lab2() {
    return (
        <Container fluid id="wd-lab2">
            {/*2.1.1 and 2.1.2*/}
            <h2>Lab 2 - Cascading Style Sheets</h2>
            <h3>Styling with the STYLE attribute</h3>
            <p>
            Style attribute allows configuring look and feel
            right on the element. Although it's very convenient
            it is considered bad practice and you should avoid
            using the style attribute
            </p>

            {/* 2.1.3 */}
            <div id="wd-css-id-selectors">
                <h3>ID selectors</h3>

                <p id="wd-id-selector-1">
                    Instead of changing the look and feel of all the 
                    elements of the same name, e.g., P, we can refer to a specific element by its ID
                </p>
                
                <p id="wd-id-selector-2">
                    Here's another paragraph using a different ID and a different look and
                    feel
                </p>

            </div>
            
            {/* 2.1.4 */}
            <div id="wd-css-class-selectors">
                <h3>Class selectors</h3>

                <p className="wd-class-selector">
                Instead of using IDs to refer to elements, you can use an element's CLASS attribute
                </p>

                <h4 className="wd-class-selector">
                This heading has same style as paragraph above
                </h4>

            </div>

            {/* 2.1.5 */}
            <div id="wd-css-document-structure">
                <div className="wd-selector-1">
                    <h3>Document structure selectors</h3>
                    <div className="wd-selector-2">
                        Selectors can be combined to refer elements in particular
                        places in the document
                        <p className="wd-selector-3">
                            This paragraph's red background is referenced as
                            <br />
                            .selector-2 .selector3
                            <br />
                            meaning the descendant of some ancestor.
                            <br />
                            <span className="wd-selector-4">
                            Whereas this span is a direct child of its parent
                            </span>
                            <br />
                            You can combine these relationships to create specific 
                            styles depending on the document structure
                        </p>
                    </div>
                </div>
            </div>

            {/* 2.1.7 */}
            <ForegroundColors />

            {/* 2.1.8 */}
            <BackgroundColors />

            {/* 2.1.9 */}
            <Borders />

            {/* 2.1.10 */}
            <Paddings />
            <br/>
            <Margins/>

            {/* 2.1.11 */}
            <Corners />

            {/* 2.1.12 */}
            <Dimensions />
            <br/>

            {/* 2.1.13, 2.1.14, 2.1.15*/} 
            <Positions />
            <br/>

            {/* 2.1.16 */}
            <Zindex />

            {/* 2.1.17 */}
            <Float />
            <br/>

            {/* 2.1.18 */}
            <GridLayout />

            {/* 2.1.19 */}
            <Flex />
            <br/>

            {/* 2.2 */}
            <ReactIconsSampler />

            {/* 2.3.3 and 2.3.4*/}
            <BootstrapGrid/>

            {/* 2.3.5 */}
            <ScreenSizeLabel />
            <br/>

            {/* 2.3.6 and 2.3.7*/}
            <BootstrapTables />

            {/* 2.3.8 and 2.3.9*/}
            <BootstrapList /> 
            <br/>

            {/* 2.3.10, 2.3.11, 2.3.12, 2.3.13, 2.3.14, 2.3.15*/}
            <BootstrapForm />

            {/* 2.3.16 and 2.3.18 */}
            <BootstrapNavigation />
            <br/>


        </Container>
    );
}
  