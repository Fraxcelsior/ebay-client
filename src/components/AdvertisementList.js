import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class AdvertisementList extends Component {
    render() {
        return (
            <div>
                    <ul>
                        {this.props.ads.map(ad =>
                            <li key={ad.id}><Link to={`/advertisements/${ad.id}`}>{ad.title}</Link></li>
                            )}
                    </ul>
            </div>
        )
    }
}

export default AdvertisementList
