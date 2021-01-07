import "./sass.scss";

export const ExampleSass = () => {
  return (
    <div className="container">
      <div className="sass-title"> Un titre Sass direct dans le container</div>
      <div className="content">
          J'suis son parent mais l'enfant du container
        <div className="inContent message">Je suis dans le content qui lui est dans le container</div>
      </div>
      <div className="box"/>
    </div>
  );
};
