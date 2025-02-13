import { Button, Col } from "react-bootstrap";
import { Form} from "react-bootstrap";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="ms-5 me-5">
            <div className="mb-3">
                <label htmlFor="wd-name" className="form-label">
                    Assignment Name</label>
                <input className="form-control"
                    id="wd-name" value="A1 - ENV + HTML" />
            </div>
            
            <textarea className="form-control mb-3" id="wd-description" cols={50} rows ={10}>
                The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section, Links to each of the lab assignments, Links to the Kanbas application, Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.
            </textarea>

            <Form>
                <Form.Group className="row mb-3">
                    <Form.Label column sm ={4} className="text-end">Points</Form.Label>
                    <Col sm={8}>
                        <Form.Control id="wd-points" placeholder="100" />
                    </Col>
                </Form.Group>

                <Form.Group className="row mb-3">
                    <Form.Label column sm ={4} className="text-end">Assignment Group</Form.Label>
                    <Col sm={8}>
                        <Form.Select id="wd-group">
                            <option selected>ASSIGNMENTS</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group className="row mb-3">
                    <Form.Label column sm ={4} className="text-end">Display Grade as</Form.Label>
                    <Col sm={8}>
                        <Form.Select id="wd-display-grade-as">
                            <option selected>Percentage</option>
                        </Form.Select>
                    </Col>
                </Form.Group>

                <Form.Group className="row mb-3">
                    <Form.Label column sm ={4} className="text-end">Submission Type</Form.Label>
                    <div id="wd-submission-type" className="border rounded col-sm-8 p-3">
                        <Form.Select className="mb-3">
                            <option selected>Online</option>
                        </Form.Select>
                        <Form.Label className="fw-bold">Online Entry Options</Form.Label>
                        <Form.Check id="wd-text-entry" className="m-2 mb-3" type="checkbox" label="Text Entry" checked name="onlineEntryOptions"/>
                        <Form.Check id="wd-website-url" className="m-2 mb-3" type="checkbox" label="Website URL" name="onlineEntryOptions"/>
                        <Form.Check id="wd-media-recordings" className="m-2 mb-3" type="checkbox" label="Media Recordings" name="onlineEntryOptions"/>
                        <Form.Check id="wd-student-annotation" className="m-2 mb-3" type="checkbox" label="Student Annotation" name="onlineEntryOptions"/>
                        <Form.Check id="wd-file-upload" className="m-2 mb-3" type="checkbox" checked label="File Upload" name="onlineEntryOptions"/>
                    </div>
                </Form.Group>

                <Form.Group className="row mb-3">
                    <Form.Label column sm ={4} className="text-end">Assign</Form.Label>
                    <div id="wd-assign-to" className="border rounded col-sm-8 p-3">
                        <Form.Label className="fw-bold">Assign to</Form.Label>
                        <Form.Control className="mb-3" id="wd-assign-to" type="text" value="Everyone" multiple/>
                        
                        <Form.Label className="fw-bold">Due</Form.Label>
                        <Form.Control className="mb-3" id="wd-due-date" type="date" value="2025-01-22"/>

                        <div className="d-flex">
                            <div className="flex-fill me-1">
                            <Form.Label className="fw-bold mb-1 me-1">Available from</Form.Label>
                            <Form.Control className="mb-3" id="wd-available-from" type="date" value="2025-01-22"/>
                            </div>
                            <div className="flex-fill">
                            <Form.Label className="fw-bold mb-1">Until</Form.Label>
                            <Form.Control className="mb-3" id="wd-available-until" type="date" value="2025-01-29"/>
                            </div>
                        </div>
                    </div>
                </Form.Group>
            </Form>

            <hr/>
            <div className="float-end">
                <Button className="btn-md btn-danger me-2 float-end"type="button" id="wd-save">Save</Button>
                <Button className="btn-md btn-secondary me-2 float-end" type="button" id="wd-cancel">Cancel</Button>

            </div>

        </div>
);}