import React from 'react';

// Power BI Embedded
import { models } from 'powerbi-client';
import { PowerBIEmbed } from 'powerbi-client-react';
import 'powerbi-report-authoring';

// CSS
import './Dashboard.css';

export default class Dashboard extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      token: props.token,
      settings: props.settings
    }
  }

  render() {
    return (
      <PowerBIEmbed
        embedConfig={{
          type: 'report',   // Supported types: report, dashboard, tile, visual and qna
          id: this.state.id,
          embedUrl: 'https://app.powerbi.com/reportEmbed',
          accessToken: this.state.token,
          tokenType: models.TokenType.Embed,
          settings: this.state.settings
        }}

        // Define event handlers
        eventHandlers={
          new Map([
            ['loaded', function () { console.log('Report loaded'); }],
            ['rendered', function () { console.log('Report rendered'); }],
            ['error', function (event) { console.log(event.detail); }]
          ])}

        // Add CSS classes to the div element
        cssClassName={"report-style-class"}

        // Get reference to the embedded object
        getEmbeddedComponent={(embeddedReport) => {
          this.report = embeddedReport;
        }}
      />
    )
  }
}