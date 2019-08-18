import React from 'react';
import Languages from './../languages/Languages';
import Frameworks from './../frameworks/Frameworks';
import Databases from './../databases/Databases';
import OrmOdmDB from './../orm-odm-db/OrmOdmDB';
import Environements from './../environements/Environements';
import OS from './../os/OS';
import IdeEditeurs from './../ide-editeurs/IdeEditeurs';

const APropos = props => {
  return (
    <div className="APropos">
      <h2>Mes Compétences</h2>
      <Languages />
      <Frameworks />
      <Databases />
      <OrmOdmDB />
      <Environements />
      <OS />
      <IdeEditeurs />
    </div>
  );
};

export default APropos;
