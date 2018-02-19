import React, { Component } from 'react'
import "github-markdown-css"

export default class InnerHtml extends Component {
  props: {
    html: string,
    className?: string,
    replaceBr?: boolean,
  }

  get innerHTML() {
    const { replaceBr, html } = this.props
    return replaceBr ? html.replace(/\n/g, '<br/>') : html
  }

  render() {
    const { className = '' } = this.props
    return <div dangerouslySetInnerHTML={{ __html: this.innerHTML }} className={`markdown-body ${className}`}/>
  }
}