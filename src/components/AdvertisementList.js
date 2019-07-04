import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class AdvertisementList extends Component {
    render() {
        if (!this.props.ads) return 'Loading...'
        return (
            <div>
                    <ul>
                        {this.props.ads.map(ad =>
                            <li key={ad.id}><Link to={`/advertisements/${ad.id}`}>{ad.title}</Link>{'\u00A0'}{ad.price}</li>
                            )}
                    </ul>
            </div>
        )
    }
}

export default AdvertisementList
