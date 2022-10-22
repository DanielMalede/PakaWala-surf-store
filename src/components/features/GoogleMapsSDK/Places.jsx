import { MDBInput, MDBListGroupItem, MDBListGroup } from "mdb-react-ui-kit";
import React from "react";
import usePlacesAutoComplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  ComboboxOption,
  ComboboxPopover,
  ComboboxList,
  Combobox,
  ComboboxInput,
} from "@reach/combobox";
// import "@reach/combobox/styles/css"

const PlaceProps = { setOffice: (position) => {} };
export default function Places({ setOffice }) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutoComplete();


   async function handleSelect(val){
    setValue(val, false);
    clearSuggestions();

    const result = await getGeocode({ address: val });
    const { lat, lng } = await getLatLng(result[0]);
    setOffice({ lat, lng });
  };
  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        placeholder="Search an address"
        className="comboboxInput"
      />
      <ComboboxPopover>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description} />
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
}
