import Location from '../model/location';

class LocationController {
  static async postALocation(req, res) {
    const { city, country } = req.body;

    const updatedLocation = await Location.findOneAndUpdate(
      { city, country },
      { $inc: { clicks: 1 } },
      { upsert: true, new: true }
    );

    return res.status(201).json({ newLocation: updatedLocation });
  }

  static async getAllLocations(req, res) {
    const locations = await Location.find();

    return res.status(200).json({ locations });
  }
}
export default LocationController;
