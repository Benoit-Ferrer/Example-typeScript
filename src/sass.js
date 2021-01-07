import "./sass.scss";

export const ExampleSass = () => {
  return (
    <div className="container">
      <div className="sass-title"> Un titre Sass</div>
      <div className="content">
          J'suis son parent
        <div className="inContent message">Je suis dans le content</div>
      </div>
      <div className="box"/>
    </div>
  );
};
