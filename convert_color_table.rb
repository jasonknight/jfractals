puts "var $COLORS = []";
i = 0;
File.open('dislinrain.tab').each_line do |line|
	
	c = line.strip.scan(/([\d\.]+)/)
	r = c[0][0]
	g = c[1][0]
	b = c[2][0]
	puts "$COLORS[ #{i} ] = { r: #{r}, g: #{g}, b: #{b} };"
	i+= 1;
end