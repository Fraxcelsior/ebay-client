import React, { Component } from 'react'
import { connect } from 'react-redux'
import AdvertisementList from './AdvertisementList'
import { loadAds } from '../actions/ads'

export class AdvertisementListContainer extends Component {
    componentDidMount() {
        this.props.loadAds()
    }
    render() {
        return (
            <React.Fragment>
                <AdvertisementList
                    ads={this.props.ads}
                />
            </React.Fragment>

        )
    }
}

const mapStateToProps = state => ({
    ads: state.ads
})

export default connect(mapStateToProps, { loadAds })(AdvertisementListContainer)
