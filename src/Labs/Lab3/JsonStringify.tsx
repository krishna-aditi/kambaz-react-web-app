export default function JsonStringify() {
    const squares = [1, 4, 16, 25, 36];
    return (
        <div className="wd-json-stringify">
            <h3>JSON Stringify</h3>
            {/* After using stringify() the array is rendered with square brackets and items are separated by commas. */}
            squares = {JSON.stringify(squares)} 
            <hr />
        </div>
    );
  }
  