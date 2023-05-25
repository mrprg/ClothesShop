import React from "react";

const Widget = ({ title, content }) => {
  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="text-gray-700">{content}</div>
    </div>
  );
};

const Widgets = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div>
        <Widget title="Widget 1" content="Lorem ipsum dolor sit amet." />
      </div>
      <div>
        <Widget title="Widget 2" content="Consectetur adipiscing elit." />
      </div>
      <div>
        <Widget title="Widget 3" content="Sed do eiusmod tempor incididunt." />
      </div>
    </div>
  );
};

export default Widgets;
