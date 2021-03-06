import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { getOpeningHours } from '../../utils/getOpeningHours'
import { JSONLD, Generic } from 'react-structured-data'

const LocalBusinessStructuredData = ({
  name,
  openingHours,
  address,
  logo,
  email,
  location,
  telephone,
  socialMediaLinks
}) => {
  const [facebook, setFacebook] = useState()
  const [instagram, setInstagram] = useState()
  const [twitter, setTwitter] = useState()

  useEffect(() => {
    if (socialMediaLinks.length > 0) {
      setFacebook(socialMediaLinks.find((el) => el.url === 'facebook'))
      setInstagram(socialMediaLinks.find((el) => el.url === 'instagram'))
      setTwitter(socialMediaLinks.find((el) => el.url === 'twitter'))
    }
  }, [socialMediaLinks])

  return (
    <JSONLD>
      <Generic
        type="localBusiness"
        jsonldtype="LocalBusiness"
        schema={{
          name: name,
          openingHours: getOpeningHours(openingHours),
          addres: address,
          logo: logo.length === 0 ? 'https://raw.githubusercontent.com/eoscostarica/lifebank/6ec27b8c7832ba6ccb4adebfe1ba8d1d94eb0544/docs/logos/2-OverWhite-lifebank-logo-v1-may25-2020-01.svg': logo,
          email: email,
          location: location,
          telephone: JSON.parse(telephone)[0]
        }}
      >
        <Generic
          type="geoCoordinates"
          jsonldtype="GeoCoordinates"
          schema={{
            latitude: JSON.parse(location).latitude,
            longitude: JSON.parse(location).longitude
          }}
        />
        {facebook && (
          <Generic
            type="sameAs"
            jsonldtype="sameAs"
            schema={{
              url: facebook.url
            }}
          />
        )}
        {instagram && (
          <Generic
            type="sameAs"
            jsonldtype="sameAs"
            schema={{
              url: instagram.url
            }}
          />
        )}
        {twitter && (
          <Generic
            type="sameAs"
            jsonldtype="sameAs"
            schema={{
              url: twitter.url
            }}
          />
        )}
      </Generic>
    </JSONLD>
  )
}

LocalBusinessStructuredData.propTypes = {
  name: PropTypes.string,
  openingHours: PropTypes.string,
  address: PropTypes.string,
  logo: PropTypes.string,
  email: PropTypes.string,
  location: PropTypes.string,
  telephone: PropTypes.string,
  socialMediaLinks: PropTypes.array
}

export default LocalBusinessStructuredData
