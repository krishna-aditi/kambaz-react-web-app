export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label><br/><br/>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description" cols={50} rows ={10}>
                The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section, Links to each of the lab assignments, Links to the Kanbas application, Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br/>
            <br/>
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>
                {/* Complete on your own */}
                <br/>
                
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group" >
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                        </select>
                    </td>
                </tr>
                <br/>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as" >
                            <option selected value="PERCENTAGE">Percentage</option>
                        </select>
                    </td>
                </tr>
                <br/>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <table>
                        <tr>
                            <td>
                                <select id="wd-submission-type" >
                                    <option selected value="ONLINE">Online</option>
                                </select>
                                <br/>
                            </td>
                        </tr>
                        <tr>
                            <td align="left" valign="middle">
                                <br/>
                                <label>Online Entry Options</label>
                                <br/>

                                <input type="checkbox" name="wd-text-entry" id="wd-text-entry"/>
                                <label htmlFor="wd-text-entry">Text Entry</label>
                                <br/>

                                <input type="checkbox" name="wd-website-url" id="wd-website-url"/>
                                <label htmlFor="wd-website-url">Website URL</label>
                                <br/>

                                <input type="checkbox" name="wd-media-recordings" id="wd-media-recordings"/>
                                <label htmlFor="wd-media-recordings">Media Recordings</label>
                                <br/>

                                <input type="checkbox" name="wd-student-annotation" id="wd-student-annotation"/>
                                <label htmlFor="wd-student-annotation">Student Annotation</label>
                                <br/>

                                <input type="checkbox" name="wd-file-upload" id="wd-file-upload"/>
                                <label htmlFor="wd-file-upload">File Uploads</label>
                                <br/>

                            </td> 
                        </tr>
                    </table>
                </tr>
                <br/>

                <tr>
                    <td align="right" valign="top">
                        <label>Assign to</label>
                    </td>
                    <table>
                        <tr>
                            <td>
                                <label htmlFor="wd-assign-to">Assign</label>
                                <br/>

                                <input type = "Text" name="wd-assign-to" id="wd-assign-to" value="Everyone" multiple/>
                                <br/><br/>

                                <label htmlFor="wd-due-date">Due</label>
                                <br/>

                                <input type = "date" name="wd-due-date" id="wd-due-date" value="2025-01-22"/>
                                <br/><br/>
                                <tr>
                                    <td>  
                                        <label htmlFor="wd-available-from">Available from</label>
                                        <br/>
                                        <input type = "date" name="wd-available-from" id="wd-available-from" value="2025-01-22"/>
                                    </td>
                                    <td>  
                                        <label htmlFor="wd-available-until">Until</label>
                                        <br/>
                                        <input type = "date" name="wd-available-until" id="wd-available-until" value="2025-01-29"/>
                                    </td>
                                </tr>
                            </td>
                        </tr>
                    </table>
                </tr>
            </table>
            <hr/>
            
            <table width="100%">
                <tr>
                    <td align="right">
                        <button type="button" id="wd-cancel">Cancel</button>
                        <button type="button" id="wd-save">Save</button>
                    </td>
                </tr>
            </table>

        </div>
);}
