import DateTime from "./DateTime"
import withFormatting from "../hocs/withFormatting"
import formattingDate from "../utils/formattingDate";

function Video(props: Video) {

    const DateTimePretty = withFormatting(formattingDate, 'date')(DateTime);

    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}

export default Video